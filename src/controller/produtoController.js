const Produto = require('../model/Produto')

const{ Op }= require('sequelize')

module.exports = {
    async list(req,res){
        const produtos = await Produto.findAll()
        return res.render('admin/produto/list.ejs',{'Produtos':produtos,'msg':req.flash('msg')})
    },
    async filtro(req,res){
        
    },
    async abreadd(req,res){
        res.render('admin/produto/add.ejs',{ msg:req.flash('msg') })
    },
    async add(req,res){
        const {nome , valor , tipo} = req.body;
        await Produto.create({nome,valor,tipo}).then(
            (produto) =>  {
            req.flash('msg',produto.nome + ' foi adicionado com sucesso!')
            res.redirect('admin/produto/add');
        }),(err) =>   {
            req.flash('msg',"Problemas ao adicionar o produto:"+ produto.nome)
            res.redirect('/admin/produto/add');
        }     
    },
    async abreedit(req,res){
        
    },
    async del(req,res){
        
    }
}