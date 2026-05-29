const searchFenderConfig = { serverId: 7593, active: true };

const searchFenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_7593() {
    return searchFenderConfig.active ? "OK" : "ERR";
}

console.log("Module searchFender loaded successfully.");