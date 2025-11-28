/*INSERT GROUP ID AND COOKIE BELOW*/

var groupId = 35878770 // << Replace 12345 with your Group Id
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_CAEaAhACIhsKBGR1aWQSEzMyMTE4OTc2MDE5NzA4OTUzMjQoAw.wsw8FBJF99ci9o6o2wyrAl_FLY6SqWnobnQGtv0kM0sIK891YtgTbxfaRVV9q1eRfq-G8ayuIH1wUBrJ4ofDaDCLwyIV2YlhhVDgcGxJOT6U_1xZlmRaXvn515MRdteDfndVaH07ccrfXbP5Vm9RLW3voWrsjjOEM-nY6cHdEQ0F_8JnLMxpq9cv5QjlYE1QchVnipFYaNoBHTrmvYeiMYUbeod14fiubqB46URQ3l4axjJuSG7eF36pdX3MnQRkUS2b3K3pmdxjJBTfnBfZ7yYW4-lyvN5NMzblXlm8QTfyWeJaiWYIRC3PJwvjFeHind_vSUQUXEApBHzGxK_aGn_5nrQICRuyHTg8DeumdwSbucBDk1l6Exr0_eSEBXPNtLUC8zkYvAQCRma03TIDk0BH1kEX-1uiooqT_pjJ002RuqleYmPHf83vrbu7VkQi44EeDTwQ07YBsF2ZGHc_L9oUFkaH6dN4WYO9raI7_2kADGSs9jJiFA7DVWhV774aGQbduBcmxvQXxnFkfGBJsdaiIoOgrTKMfmD0ll21Y9s7pjxrbOE6M2VAvvMmZLvA-XGBf07HWARZ_NSP8ukdj5scv_EPhXQ9Ieb17or6t2OyMiwBJdphyF1nuXjMtPYazgEmqkVpMpf9NMGHeq8BH0UmivezUAOm0fxBhFLeuAGcQI3iy9t3pKf_kelQu3oPQ_Xi2hmMGqcksjc62aGhiNndE7-Dfu4tvvwPSZM5_PwicHcs2seorqsx95Ogbda25p8wqVaROHG2bWCySvxf22QDMrtDQ66el7f37xQkOwIxJVFRRj2VnpOgZBRWXy0UPERsWoWMxSZa59AUJ2VPppa6IHwQ7XdipgVT3FaesbJ8gha4w4MnkYyZQGr5MAPDCKBBtUg8MegCIj2Nnt4IT27G44d5s4I_mN_Qpf78bBCHrnuaxvNyab_jt9nF_1O_tvKlDBbRiNZ9snxB5-I-VJcywN-WLu83BcYAXziczQu3qPvyuvdFRdSRb9bxhGNH1ozI_7o4lUxYt8pbMTRtvqzz18Tx0nXoDs2j34Y5UTjJxZAYjBQvREGstxB8BJT-wp7UhQAJgL76Uboqkdaln_0zMh8jGVBBjuBc2DAmmjKoORlZQLHBDy-ZO9Raa-Aij-M7wvh-z2mmIJ7pwW_BZ2_eYO6aCKQAxl39kn2OTU4qgW11" // << Put your account cookie/.ROBLOSECURITY key inside of the quotes

/*INSERT GROUP ID AND COOKIE ABOVE*/


const express = require("express");
const rbx = require("noblox.js");
const app = express();

app.use(express.static("public"));

async function startApp() {
  await rbx.setCookie(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();

app.get("/ranker", (req, res) => {
    var User = req.param("userid");
    var Rank = req.param("rank");
  
    rbx.setRank(groupId, parseInt(User), parseInt(Rank));
    res.json("Ranked!");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
