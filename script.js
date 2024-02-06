 let section = document.querySelectorAll('section');
        let navlink = document.querySelectorAll('header nav a');
        window.onscroll = () => {

            section.forEach(sec => {
 
                let top = window.scrollY;

                let offset = sec.offsetTop-150;

                let height = sec.offsetHeight;

                let id = sec.getAttribute('id');
            });
        };
