export class ObjectsUtils{
    static remove = (key, {[key]: remove, ...rest}) => rest;
}