document.getElementById('saveProfile').addEventListener('click', () => {
    const profile = document.getElementById('profileSelect').value;

    const name = document.getElementById('nameField').value;
    const experience = document.getElementById('experienceField').value;
    const skills = document.getElementById('skillsField').value;

    const profileData = {
        name: name,
        experience: experience,
        skills: skills
    };

    localStorage.setItem(profile, JSON.stringify(profileData));
    alert("Profile data saved!");
});

document.getElementById('profileSelect').addEventListener('change', () => {
    const profile = document.getElementById('profileSelect').value;

    const storedProfile = localStorage.getItem(profile);

    if (storedProfile) {
        const profileData = JSON.parse(storedProfile);

        document.getElementById('nameField').value = profileData.name;
        document.getElementById('experienceField').value = profileData.experience;
        document.getElementById('skillsField').value = profileData.skills;
    } else {
        document.getElementById('nameField').value = '';
        document.getElementById('experienceField').value = '';
        document.getElementById('skillsField').value = '';
    }
});
document.getElementById('profileSelect').addEventListener('change', () => {
    const profile = document.getElementById('profileSelect').value;

    const storedProfile = localStorage.getItem(profile);

    if (storedProfile) {
        const profileData = JSON.parse(storedProfile);
        document.getElementById('nameField').value = profileData.name;
        document.getElementById('experienceField').value = profileData.experience;
        document.getElementById('skillsField').value = profileData.skills;
    } else {
        document.getElementById('nameField').value = '';
        document.getElementById('experienceField').value = '';
        document.getElementById('skillsField').value = '';
    }
});

document.getElementById('createProfile').addEventListener('click', () => {
    const newProfileName = prompt("Enter a name for the new profile:");

    if (newProfileName) {
        if (!localStorage.getItem(newProfileName)) {
            localStorage.setItem(newProfileName, JSON.stringify({
                name: '',
                experience: '',
                skills: ''
            }));

            const profileSelect = document.getElementById('profileSelect');
            const newOption = document.createElement('option');
            newOption.value = newProfileName;
            newOption.textContent = newProfileName;
            profileSelect.appendChild(newOption);
        } else {
            alert("Profile with this name already exists!");
        }
    }
});