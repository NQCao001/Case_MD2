export interface Manager<T> {
    add(t:T);
    findAll();
    edit(id,name);
    delete(id);
}