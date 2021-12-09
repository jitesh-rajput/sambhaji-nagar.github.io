window.onload=function()
{   var images=[
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/BIBI_KA_MAQBARA_%28TOMB_OF_THE_LADY%29_2.jpg/1024px-BIBI_KA_MAQBARA_%28TOMB_OF_THE_LADY%29_2.jpg','Biki Ka Maqbara',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Daulatabad_Fort_a_view.JPG/480px-Daulatabad_Fort_a_view.JPG','Daultabad Fort',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/1_Aurangabad_Buddhist_Caves.jpg/300px-1_Aurangabad_Buddhist_Caves.jpg','Ajanta Caves',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/BAMU_gate.jpg/1024px-BAMU_gate.jpg','BAMU Gate',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bhadkal_Gate.JPG/1024px-Bhadkal_Gate.JPG','Bhadkal Gate',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Kranti_Chowk_01.jpg/470px-Kranti_Chowk_01.jpg','Kranti Chowk',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/1_Hinayana_style_Aurangabad_Buddhist_Cave_with_stupa.jpg/800px-1_Hinayana_style_Aurangabad_Buddhist_Cave_with_stupa.jpg','Hinayana Style',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Aurangabad_-_Ajanta_Caves_%289%29.JPG/225px-Aurangabad_-_Ajanta_Caves_%289%29.JPG','AJANTA_CAVES',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Salim_Ali_Lake.jpg/616px-Salim_Ali_Lake.jpg','Salim_Ali_Lake',
    'https://upload.wikimedia.org/wikipedia/commons/2/27/Siddharth_Garden_and_Zoo.jpg','Sidharth Garden' ,  
    'https://upload.wikimedia.org/wikipedia/commons/a/ac/Ahilyabai_Holkar_Chowk.jpg','AhilyaBai Holkar Chowk' 
];
    var index=0;
    card=document.getElementById("pic").src=images[index];
    document.getElementById("info").innerHTML=images[index+1];

    document.querySelector("#next").addEventListener("click",next_img);
    function next_img(){
        if (index>=((images.length/2)-1)*2){
            index=0;
            document.getElementById("pic").src=images[index];
            document.getElementById("info").innerHTML=images[index+1];
        }
        else{
        index=index+2;
        card=document.getElementById("pic").src=images[index];
        document.getElementById("info").innerHTML=images[index+1];

        }
    }

    document.querySelector("#previous").addEventListener("click",previous);
    function previous(){
        if (index==0){
            index=images.length-2;
            card=document.getElementById("pic").src=images[index];
            document.getElementById("info").innerHTML=images[index+1];
        }
        else{
        index=index-2;
        card=document.getElementById("pic").src=images[index];
        document.getElementById("info").innerHTML=images[index+1];

        }
    }


}