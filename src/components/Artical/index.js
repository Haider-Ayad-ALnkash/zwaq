import {ReactChild,Component} from 'react';
import logo from '../images/Logo/MY_LOGO.png'
class Article extends Component{
    componentDidMount(){
        // Selection pop 
        var heading=document.getElementsByClassName('accordion');
        for (let i = 0; i < heading.length; i++) {
            heading[i].addEventListener('click',function () {
                this.classList.toggle('active');
               var desc=this.nextElementSibling;
                if (desc.style.maxHeight) {
                   desc.style.maxHeight = null
               } else {
                desc.style.maxHeight=desc.scrollHeight +"px";
               }
            })  
        }
            }

            render(){
                return(
                    <section className="social-media">
                        <div class="container">
                           <button class="accordion">فلسفة الشعار</button>
                           <div class="desc">
                               <p>
                               جميع مافي هذا الكون يحمل سمة عامة لتشكل هوية بصرية او مايعرف بالوكو,الاديان تحمل هوية بصرية بمجرد ذكر المسيحية تتكون صورة ➕ في ذهنك، الاسلام 'الله اكبر' ليشمل ذلك حتى السياسة واللازمة التي تميز كل انسان هي هوية بصرية. في السابق كانت نظرتي لتصميم شعار خاص بي مستمدة من رمز الانفنتي اي لانهائية، لكن بعد تطور افكاري وتغير القناعات وجدت انه لايوجد كمال الا لخالق الاكوان كسرت رمز الانفنتي واصبح الشعار فيه سمة اكثر الى اسمي.
                               </p>
                               <img className="imgLogo" src={logo} alt="logo"/>
                           </div>
           
                       <button class="accordion"> قناة سبيستون VS قناة كارتون نتورك</button>
                           <div class="desc">
                               <p>
                               قناة سبيستون كانت دائماً حريصة على انتقاء الكارتون المصمم من المجتمع الغربي واعادة صياغته بالمفردات العربية الجميلة وتشذيبه ليلائم المجتمع العربي. لحد الان بذاكرتي شلون جانت القناة تنقلنا من كوكب العلوم الى كوكب المرح وهكذا.... دمتم سالمين

                               </p>
                           </div>
                       <button class="accordion">المقام العراقي الماهوري </button>
                           <div class="desc">
                               <p>
                               'الماهوري' من المقامات المفرحة تستخدم في العراق للتمجيد بحلول العيد، حيث غالباً تكون المقامات العراقية لقراءة القرأن الكريم حزينة، اما في العيد تبتهج مسامعنا بالمقام الماهوري. استمع واستمتع للمقام 

                               </p>
                               <iframe width="560" height="315" src="https://www.youtube.com/embed/LzsN-eNwTYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           </div>
                       </div>
                   </section>
               )
            }
   
}

export default Article;