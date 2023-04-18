export interface Pokemon {
    id:     number;
    number: string;
    image:  string;
    weight: string;
    specie: string;
    height: string;
    stats:  Stats;
    type:   Type[];
}

export interface Stats {
    hp:             number;
    attack:         number;
    defense:        number;
    specialAttack:  number;
    specialDefense: number;
    speed:          number;
}

export interface Type {
    name:  string;
    icon:  Icon;
    color: string;
}

export interface Icon {
    type:   Store;
    key:    null;
    ref:    null;
    props:  Store;
    _owner: null;
    _store: Store;
}

export interface Store {
}