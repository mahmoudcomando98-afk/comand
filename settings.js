const fs = require('fs')
const chalk = require('chalk')

// ==================== [ البيانات الأساسية للبوت ] ====================
global.owner = ['5539527858']                     // رقم المالك
global.premium = ['5539527858']                   // الأرقام المتميزة
global.botname = 'COMANDO'                        // اسم البوت
global.ownername = 'SFAHMOD'                      // اسم المالك
global.caption = 'تم التحديث بواسطة COMANDO'

// ==================== [ التوكن والروابط ] ====================
global.botToken = '9073765716:AAFvtbao9o5vFcfbqusap93XTep65Egii9k' // توكن البوت
global.linkTop1 = 'https://t.me/Power_Top1'                        // رابط قناة تليجرام 1
global.linkBot = 'https://t.me/comandobot314'                       // رابط قناة تليجرام 2
global.linkWhatsapp = 'https://chat.whatsapp.com/KLR2rWMzEyfKSWhBKm732V?s=cl&p=a&iam=2' // رابط مجتمع الواتساب

// ==================== [ إعدادات الصور والميديا ] ====================
// تم استخدام صورة افتراضية من داخل المجلد، ويمكنك تغيير ملف الصورة بنفس الاسم لاحقاً
global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg') 
global.donImg = fs.readFileSync('./XeonMedia/donate.jpg')

// ==================== [ رسائل الاستجابة التلقائية ] ====================
global.mess = {
    done: 'تم التنفيذ بنجاح! ✅',
    prem: 'هذه الميزة للمستخدمين المميزين فقط! 👑',
    admin: 'هذا الأمر مخصص للمشرفين فقط! 🛡️',
    botAdmin: 'يجب ترقية البوت إلى مشرف أولاً! 🤖',
    owner: 'هذا الأمر مخصص للمالك SFAHMOD فقط! 👤',
    group: 'هذا الأمر يعمل داخل المجموعات فقط! 👥',
    private: 'هذا الأمر يعمل في المحادثات الخاصة فقط! 🔒',
    wait: 'جاري التناول والترتيب... انتظر لحظة ⏳',
    error: 'حدث خطأ غير متوقع! ❌',
}

// ==================== [ التحديث التلقائي للملف ] ====================
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`تم تحديث الملف: '${__filename}'`))
    delete require.cache[file]
    require(file)
})