import gsap from 'gsap'

export const  AnimatePageIn = () => {

    const bannerOne = document.getElementById('banner-1')
    const bannerTwo = document.getElementById('banner-2')
    const bannerThree = document.getElementById('banner-3')
    const bannerFour = document.getElementById('banner-4')
    const pageName = document.getElementById('pagename')

    if(bannerOne && bannerTwo && bannerThree && bannerFour){
        const tl = gsap.timeline()

        tl.set([bannerOne,bannerTwo,bannerThree,bannerFour],{
            yPercent:0,
        }).to([bannerOne,bannerTwo,bannerThree,bannerFour],{
            yPercent:100,
            stagger:0.2,
        })
        .fromTo(
            pageName,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1, ease: 'power1.inOut' }
            
        );

    }
}
