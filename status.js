let colors = ['lightSalmon', 'orange', 'teal', 'skyblue', 'darkSlateGray'];
        
        let fontStyle = ['serif', 'monospace', 'cursive', 'fantasy', 'sans-serif'];
        
        let defaultBg = Math.floor(Math.random()*colors.length);
        console.log(colors[defaultBg]);
        
        
        let choice = 0;
 document.addEventListener('DOMContentLoaded', function(){
     
           document.querySelector('textarea').style.fontFamily = 'san-serif';
               document.querySelector('body').style.backgroundColor = colors[defaultBg];
            document.querySelector('#bgColor').onclick = function(){
                console.log(choice)
                if(choice<=colors.length-1){
                document.querySelector('body').style.backgroundColor = colors[choice];
                    
                }else{
                    choice = 0;
                    document.querySelector('body').style.backgroundColor = colors[choice];
                }
                
                choice++
            }
            
              document.querySelector('textarea').style.fontFamily = 'sans-serif';
          document.querySelector('#textStyle').onclick = function(){
                
               if(choice<= fontStyle.length-1){
//                   console.log(choice);
                   document.querySelector('textarea').style.fontFamily = fontStyle[choice];
                   
               }else{
                   choice = 0;
                   document.querySelector('textarea').style.fontFamily = fontStyle[choice];
               } 
//               console.log(fontStyle[choice]);
                
                choice++
            }
        })