

async function sendTelegramMessage() {
    const botToken = "7140817767:AAE7Pp6NSlttwdqzcBk-biJnSoCdONvsRjQ";
    const chatId = "-4177602455";
    const Name = document.getElementById("name").value;
    const Number = document.getElementById("PhoneNumber").value;
    const Email = document.getElementById("email").value;
    const avto = document.getElementById("avtomobilNomi").value;
    const yxt = document.getElementById("yukxonaTuri").value;
    const joyi = document.getElementById("joyi").value;
    const ykm = document.getElementById("yukMassa").value;
    const yxk = document.getElementById("yukKengligi").value;
    const yxb = document.getElementById("yukBalandligi").value;
    const yxu = document.getElementById("yukUzunligi").value;
    
    const Sended = `
    Name: ${Name}\n-----------------------\n 
    Phone: ${Number}\n-----------------------\n 
    Email: ${Email}\n-----------------------\n 
    Avtomobil nomi ${avto}\n-----------------------\n
    Yukxona Turi: ${yxt}\n-----------------------\n
    Xozir turgan joyi: ${joyi}\n-----------------------\n
    Yuk ko'tarish og'irligi: ${ykm}\n-----------------------\n
    Yuk kengligi: ${yxk}\n-----------------------\n
    Yukxona Balandligi:${yxb}\n-----------------------\n
    Yukxona uzunligi:${yxu}\n-----------------------\n
    `
    console.log(Sended)
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



