import { post } from '../api';

export function authenticate(user_mobile, password) {
    // return post('/login', {
    //     /* Data Of Login Form (userMobile ,password) */
    //     data: {
    //         user_mobile,
    //         password,
    //         device_type: "2",
    //         device_token: "12321"
    //     }
    // })
    return {"status":1,"message":"Login successfully.","data":{"id":69,"first_name":"Akshay","last_name":"Mahajan","email":"ak47@yopmail.com","email_verified":"0","email_verified_at":"","mobile_verified":"1","mobile_verified_at":"","user_mobile":"7567608927","country_code":"+91","wallet":"0","commission":"0","gender":"","profile_image":"http:\/\/139.59.84.117\/cesanobike\/resources\/uploads\/profile\/default.jpg","preferred_language":"","short_introduction":"","address":"","city":"","state":"","country":"","latitude":"","longitude":"","pin_code":"","device_type":"2","device_token":"12321","app_type":"production","user_status":"1","created_at":{"date":"2020-04-20 22:47:21.000000","timezone_type":3,"timezone":"Asia\/Kolkata"},"updated_at":"2020-04-29 14:24:02","user_id":69,"role_id":3,"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM3NjYzZWNjNWFkMDNiOTk2OTBkYjE3OWQ5OGU4MTRjNjE5NmRiN2Y0NTJkODRhN2I3ZmQ2YjY3OWM0YTA4MDZlMWYzNjUzMzQ4YWFmMGFlIn0.eyJhdWQiOiI1IiwianRpIjoiYzc2NjNlY2M1YWQwM2I5OTY5MGRiMTc5ZDk4ZTgxNGM2MTk2ZGI3ZjQ1MmQ4NGE3YjdmZDZiNjc5YzRhMDgwNmUxZjM2NTMzNDhhYWYwYWUiLCJpYXQiOjE1OTI4NDg0NTMsIm5iZiI6MTU5Mjg0ODQ1MywiZXhwIjoxNjI0Mzg0NDUzLCJzdWIiOiI2OSIsInNjb3BlcyI6W119.iKhSPasWKS-VM2aENk6SqcAgqvPjRYDrJUBu2zJLvdGgMA7Ydx98IOCEWjgGsnPcLe4hJOIQGX8T9c15TNPpPpWBJ0Ut6pzqxpT2WHGfomSgQ7slmBgz7VFarjg1QoHVPFr-huplnS_jZEBczhFPFSAADsYnxQKcsKRDTqWj9X2VjzTdPYPw5G5szkYu8Z8Hx-4FQF5fg6WmVlTtnZjULR7XSqvDn7FW-ppK6TXTZbZitjsjptFZZMvDQ3YZ_W7OSRLV9i_oMyCSyDwmHcoqREC2BlHF-XGcwH78N7OQzE228RriiWJHIqZBP6EGaSj8KMhPxVk19AQf0zquJ7--78E3vSHFBUSYVoRFV99RhS7cgu5JGqlLv7WJhykmlaiCklouNGyFC6iHTvNp-ckgUmnEbtZ4gfRiA4fM-hZmP7Fovi9Rt_bxloXpZ6RTh8OWTTpDN4j1ChKbzgqFjwYir3oollZD4-IkmpYrx0TZ_D3Og30VIO8xsdjBiX47N5MBZ7t2v5wazcqW-Ju_dhIS1BnmNs1kj45aHIh8dddIemMXMX0Zp349pp9rJhIqjGKZB4Re-JxVfBQEKOEEtkOdYNIpEXLT124bc-HHC0gXvLm02T-n1EY9M6z5bdmK9F9UXvHlnevs2-tgJ3TFrZOiUGKrT5mjoJy9RzccU1xdgcs"}}
}

// export function logoutuser() {
//     return post('/logout', {
//         /* Data Of Login Form (userMobile ,password) */
//     })
// }


