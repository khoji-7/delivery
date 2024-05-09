function calaculatePrice () {
    const yko = document.getElementById("yukMassa").value;
    const yku = document.getElementById("yukUzunligi").value;
    const  ykb = document.getElementById("yukBalandligi").value;
    const ykk = document.getElementById("yukKengligi").value;
    const ylm = document.getElementById("yukMasofa").value;
    const result = document.getElementById("result");
    let xajmi =yku*ykb*ykk;
    let narx;

    if (ykb <= 1){
         narx = xajmi*yko*ylm*100;
    }
    else{
        narx = yko*yku*ykb*ykk*ylm*10;

    }

    
    result.innerHTML = `yetkazib berish narxi ${narx} so'mni tashkil qiladi`;
    alert(`yetkazib berish taxminiy narxi ${narx} so'mni tashkil qiladi`);

}
async function sendTelegramMessage() {
    const botToken = "7140817767:AAE7Pp6NSlttwdqzcBk-biJnSoCdONvsRjQ";
    const chatId = "-4177602455";
    const Name = document.getElementById("yukname").value;
    const Number = document.getElementById("yukPhoneNumber").value;
    const Account = document.getElementById("yukemail").value;
    const yko = document.getElementById("yukMassa").value;
    const yku = document.getElementById("yukUzunligi").value;
    const ykb = document.getElementById("yukBalandligi").value;
    const ykk = document.getElementById("yukKengligi").value;
    const ylm = document.getElementById("yukMasofa").value;
    const qayerdan = document.getElementById("qayerdan").value;
    const qayerga = document.getElementById("qayerga").value;
    const Sended = `
    
    Yuk egasi: -----------------------\n 
    Name: ${Name}\n-----------------------\n 
    Phone: ${Number}\n-----------------------\n 
    Account: @${Account}\n-----------------------\n 
    Yuk og'irligi: ${yko}\n-----------------------\n
    Yuk uzunligi: ${yku}\n-----------------------\n
    Yuk balandligi: ${ykb}\n-----------------------\n
    Yuk kengligi: ${ykk}\n-----------------------\n
    qayerdan:${qayerdan}\n-----------------------\n
    Qayerga: ${qayerga} \n-----------------------\n
    Yol uzunligi:${ylm}\n-----------------------\n
    `
    try {
        const response = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: Sended
                }),
            }
        );
        if (response.status === 200) { 
            alert("Xabaringiz yetkazildi");
            window.location.reload()
        }
    } catch (error) {
        console.error("Xatolik:", error);

    }
    console.log(Name);
}