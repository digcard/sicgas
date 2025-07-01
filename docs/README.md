

# GasProBot – Sistema Inteligente de Entrega de Gás

O GasProBot ajuda entregadores e revendas a preverem com precisão quando o gás dos seus clientes vai acabar.

📦 Automatize entregas  
📅 Planeje sua rota do dia  
📲 Envie mensagens automáticas via WhatsApp  

## ✅ Demonstração

Execute com a lista de exemplo:

```bash
pip install -r requirements.txt
python sistema_entregas.py
```

## Funcionalidades Implementadas:

1. Carregamento de Dados: A aplicação carrega os dados diretamente da planilha do Google Sheets.
2. Previsão com ARIMA: Implementa o modelo ARIMA para prever a duração do consumo de gás.
3. Interface Interativa:

    - Filtro por data para visualizar clientes com entregas em datas específicas
    - Botão para atualizar os dados
    - Visualização gráfica do histórico e previsões

4. Visualização de Resultados:

    - Quatro abas completas com Tabelas organizadas por data de entrega:

        - Entregados: Histórico completo de entregas já realizadas
        - Entregar Hoje: Lista de clientes com entrega prevista para o dia atual
        - Próximos Dias: Previsões para os próximos 7 dias
        - Previsão Final de Semana: Clientes com entregas previstas para sábado ou domingo