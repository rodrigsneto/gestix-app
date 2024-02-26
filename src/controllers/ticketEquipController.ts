import { Request, Response } from 'express';
import { TicketEquip } from '../models/TicketEquip';

export const ticketEquip = async (req: Request, res: Response)=>{
    console.log("funcao ticket equipe");
    let pageTitle = "Tickets de Equipamentos";

    let equips = await TicketEquip.findAll({
        attributes: [
            'customer', 'name', 'defect', 'status', 'repair_company'
        ]
    });

    res.render('pages/ticketEquipsHome', {
        pageTitle,
        equips
    }); 
};

export const ticketEquipNew = async (req: Request, res: Response)=>{
    let pageTitle = "Novo Ticket de Equipamento";

    let equips = await TicketEquip.findAll({
        attributes: [
            'customer', 'name', 'defect', 'status', 'repair_company'
        ]
    });

    res.render('pages/ticketEquipsNew', {
        pageTitle,
        equips
    }); 
};


export const addTicketEquip = async (req: Request, res: Response)=>{

    console.log('antes do if');

    if(req.body.name) {
        console.log('entrou no if');
        let name : string = req.body.name as string;
        let customer : string = req.body.customer as string;
        let defect : string = req.body.defect as string;
        let status : string = req.body.status as string;
        let repair_company : string = req.body.repair_company as string;
        let priority : string = req.body.priority as string;
        let received_date : string = req.body.received_date as string;
        let attedant : string = req.body.attedant as string;
        let repair_company_received_date : string = req.body.repair_company_received_date as string;
        let image : string = req.body.image as string;
        let customer_responsible : string = req.body.customer_responsible as string;



        const ticketEquip = TicketEquip.build({
            name,
            customer,
            defect,
            status,
            repair_company,
            priority,
            received_date,
            attedant,
            repair_company_received_date,
            image,
            customer_responsible
        })

        // console.log("NEW EQUIP: ", JSON.stringify(ticketEquip));

        // ticketEquip.save();





    }

    res.redirect('/ticketEquips')

};