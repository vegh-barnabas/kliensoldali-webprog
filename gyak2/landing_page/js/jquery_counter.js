{
    const observer = new IntersectionObserver(onObserve, {
        threshold: 0.1
    });


    function onObserve(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("asd");
                $("footer span").animateNumber({ number: 2022 });
            }
        });
    }

    // $("footer span").on("click", function () { 
    //     $("footer span").animateNumber({ number: 2022 });
    // });

    observer.observe(document.querySelector("footer"));
}