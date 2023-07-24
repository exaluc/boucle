window.addEventListener('scroll', function (e) {
    // Get all of the items in the ToC and the sections they link to
    let tocItems = Array.from(document.querySelectorAll('.toc__menu a'));
    let sections = tocItems.map(a => document.querySelector('[id="' + a.getAttribute('href').substring(1) + '"]'));

    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progressHeight = (window.pageYOffset / totalHeight) * 100;
    document.getElementById('progress-bar').style.width = progressHeight + '%';

    // Determine which section is currently visible
    let currentIndex = sections.findIndex((section, i) => {
        let nextSection = sections[i + 1];
        if (nextSection) {
            return window.scrollY + 50 < nextSection.offsetTop; // Adjust the 50 here to change the switch-over point
        } else {
            return true;
        }
    });

    // Remove the 'active' class from all ToC items, add it to the current one, and 'read' to the read ones
    tocItems.forEach((a, i) => {
        if (i < currentIndex) {
            a.classList.add('read');
        } else {
            a.classList.remove('read');
        }
        a.classList.toggle('active', i === currentIndex);
    });
});