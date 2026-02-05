function loadContact() {
    const content = document.querySelector('#content');
    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "Contact";
    content.appendChild(contactHeading);
    const desc = document.createElement("p");
    desc.textContent = "Feel free to reach out to us with any questions, scheduling inquiries, feedback, and more!";
    content.appendChild(desc);
    const br = document.createElement("br");
    content.appendChild(br);
    const socials = [
        {platform: "Instagram", info: "@ClementinesCafe"},
        {platform: "Facebook", info: "@Clementine3ats!"},
        {platform: "Twitter", info: "@Clementines_Cafe"},
        {platform: "TikTok", info: "@CafeClementines"},
    ]
    socials.forEach(social => {
        const contact = document.createElement("p");
        contact.textContent = social.platform + ": " + social.info;
        content.appendChild(contact);
    })
}
export {
    loadContact
};