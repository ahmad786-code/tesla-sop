import NextLink from 'next/link'
import { Typography , Grid, Chip, Link  } from "@mui/material"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ShopLayout} from "../../components/layouts"

const columns: GridColDef[] =  [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'fullName', headerName: 'Full Name', width: 300},
    {
        field: 'paid',
        headerName: 'Paid',
        description: 'Lorem ipsum dollar sit ',
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
            return (
                params.row.paid ? <Chip color="success" label="Paid" variant="outlined"/> : <Chip color="error" label="Unpaid" variant="outlined"/> 
            )
        }
    },
    {
        field: 'order',
        headerName: 'See Order',
        width: 200,
        sortable: false,
        renderCell: (params: GridValueGetterParams) => {
            return (
               <NextLink href={`/orders/${params.row.id}`} passHref>
                <Link underline="always">
                See Order
                </Link>
               </NextLink>
            )
        }
    }
]

const rows = [
    {id: 1, paid: false,  fullName: 'Ahmed Raza'},
    {id: 2, paid: true,  fullName: 'John Smith'},
    {id: 3, paid: false,  fullName: 'Peter'},
    {id: 4, paid: true,  fullName: 'Alesandra'},
    {id: 5, paid: true,  fullName: 'Anna Smith'},
    {id: 7, paid: false,  fullName: 'John Doe'},
]

const HistoryPage = () => {
    return (
        <ShopLayout title={"Order History"} pageDescription={"Your order history"}>
            <Typography variant="h1" component="h1">Order History</Typography>

            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                <DataGrid  rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]}/>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default HistoryPage