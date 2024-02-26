import {Model, DataTypes} from "sequelize";
import {sequelize} from '../instances/pg';

export interface TicketEquipInstance extends Model {
    id: number,
    name: string,
    customer: string,
    defect: string,
    status: string,
    repair_company: string,
    priority: string,
    received_date: string,
    attedant: string,
    repair_company_received_date: string,
    image: string
}

export const TicketEquip = sequelize.define<TicketEquipInstance>("ticketEquip", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    customer: {
        type: DataTypes.STRING
    },
    defect: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    repair_company: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.STRING
    },
    received_date: {
        type: DataTypes.DATE
    },
    customer_responsible: {
        type: DataTypes.STRING
    },
    attedant: {
        type: DataTypes.STRING
    },
    repair_company_received_date: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'equipments',
    timestamps: false
})