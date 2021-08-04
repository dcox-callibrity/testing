const box = {
    locked: true,
    unlock: function(){this.locked = false;},
    lock: function(){this.locked = true;},
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
}

export const withBoxUnlocked = (myFunction) => {
    try {
        box.unlock();
        console.log(box.locked);
        if(!box.locked){
            myFunction();
        }
    }
    catch(e){
        console.log(e);
    }
    finally{
        box.lock();
        console.log(box.locked);
        return
    }
}