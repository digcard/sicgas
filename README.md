# SICGAS - Sistema inteligente de Previsão de consumo de Gás

## Descrição
O Sistema de Previsão de Entrega de Gás é uma aplicação desenvolvida para gerenciar e prever entregas de gás, auxiliando na organização e planejamento das entregas para diferentes clientes.

## Funcionalidades

### 1. Visualização de Entregas
- **Entregados**: Lista de clientes com entregas já realizadas
- **Entregar Hoje**: Clientes com previsão de entrega para o dia atual
- **Próximos Dias**: Previsões de entrega para os próximos dias
- **Final de Semana**: Entregas previstas para o final de semana
- **Estatísticas**: Visualização de dados estatísticos

### 2. Filtros e Pesquisa
- Filtro por data usando DatePicker
- Seleção de cliente específico
- Diferentes tipos de visualização (Linha, Barras, Dispersão)

### 3. Exportação de Dados
- Exportação de relatórios em formato CSV
- Dados formatados no padrão brasileiro
- Relatórios organizados por data e hora

## Requisitos do Sistema
- Python 3.x
- Bibliotecas necessárias:
  - flet
  - pandas
  - statsmodels
  - plotly
  - numpy

## Configuração

### Instalação
1. Clone o repositório
2. Instale as dependências:
```bash
pip install -r requirements.txt
```

### Configuração do Google Sheets
O sistema utiliza uma planilha do Google Sheets como fonte de dados. Configure o ID da planilha no arquivo `entrega_gas.py`:
```python
spreadsheet_id = "seu_id_da_planilha"
```

## Uso

### Iniciando o Sistema
Execute o arquivo principal:
```bash
python entrega_gas.py
```

### Navegação
1. **Seleção de Data**
   - Use o calendário para escolher a data desejada
   - A data atual é selecionada por padrão

2. **Filtragem de Clientes**
   - Selecione um cliente específico no dropdown
   - Use a opção "Todos" para ver todos os clientes

3. **Visualização de Dados**
   - Alterne entre as diferentes abas para ver diferentes aspectos dos dados
   - Use os botões de exportação para gerar relatórios

## Estrutura de Arquivos
```
entrega_gas/
├── entrega_gas.py     # Arquivo principal
├── requirements.txt   # Dependências
├── docs/             # Documentação
└── relatorios/       # Relatórios exportados
```

## Logs e Depuração
Os logs do sistema são salvos em:
- Windows: `%LOCALAPPDATA%\gas_logs`
- Linux/Mac: `/tmp/gas_logs`

## Contribuição
Para contribuir com o projeto:
1. Fork o repositório
2. Crie uma branch para sua feature
3. Faça commit das mudanças
4. Push para a branch
5. Abra um Pull Request

## Suporte
Em caso de problemas:
1. Verifique os logs do sistema
2. Confirme as configurações da planilha
3. Verifique a conexão com internet

## Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.