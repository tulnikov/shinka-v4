import Card from './Card'

export default function ToPay({totalPrice}) {
    return <Card>
        <div>К оплате:</div>
        <div>{totalPrice} Руб.</div>
    </Card>
}