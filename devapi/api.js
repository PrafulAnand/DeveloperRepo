const express = require('express');
const axios = require('axios');
const router = express.Router();

let devProfiles = [];

router.get('/developers', (req, res) => {
    if (getAllDevProfilesData().length > 0) {
        res.status(200).send(getAllDevProfilesData());
    }
    else {
        res.status(404).send("No Dev profile content at the moment");
    }
});

router.get('/developers/:id', (req, res) => {
    const devProfileId = req.params.id;
    const foundDevProfile = devProfiles.filter((devProfile) => devProfile.id === devProfileId);
    if (foundDevProfile.length > 0) {
        res.status(201).send(foundDevProfile);
    } else {
        res.status(404).send(`No profile found for the developer with id ${devProfileId}`);
    }
});

router.post('/developers', (req, res) => {
    const devProfileData = req.body;
    const { github_id } = devProfileData;
    const userGitHubPromise = axios(`https://api.github.com/users/${github_id}`);
    const userRepoPromise = axios(`https://api.github.com/users/${github_id}/repos`);
    Promise.all([userGitHubPromise, userRepoPromise]).then(responses => {
        const userGithubInfo = responses[0].data;
        const userRepoInfo = getReposDataForDev(responses[1].data);
        devProfiles.push(
            {
                id: github_id, avatar_url: userGithubInfo.avatar_url, name: userGithubInfo.name,
                company: userGithubInfo.company, blog: userGithubInfo.blog, location: userGithubInfo.location,
                email: userGithubInfo.email, bio: userGithubInfo.bio, ...devProfileData, repos: userRepoInfo
            });
        res.send({ id: github_id });
    });
});

router.delete('/developers/:id', (req, res) => {
    const originallength = devProfiles.length;
    const userId = req.params.id;
    devProfiles = devProfiles.filter((dev) => dev.id !== userId);
    //if by chnce the id doesnt exists the array length would be same
    if (originallength === devProfiles.length) {
        res.status(404).send(`Developer with userID: ${userId} cannot be deleted as it doesn't exists`);
    } else {
        // for successful deletion
        res.status(204);
    }
});

//filtering out repos data to include response as per project specification
function getReposDataForDev(responseData) {
    return responseData.map(data => {
        // constructing object to be returned via map function
        return {
            "name": data.name,
            "html_url": data.html_url,
            "description": data.description,
            "updated_at": data.updated_at
        };
    });
}

function getAllDevProfilesData() {
    return devProfiles.map(data => {
        // constructing object to be returned via map function
        return {
            "id": data.id,
            "avatar_url": data.avatar_url,
        };
    });
}

module.exports = router;