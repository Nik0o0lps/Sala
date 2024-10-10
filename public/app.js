new Vue({
    el: '#app',
    data: {
        portas: [] // Armazena a lista de portas
    },
    created() {
        // Quando o componente é criado, fazemos a requisição para obter a lista de portas
        this.obterPortas();
    },
    methods: {
        // Função para obter a lista de portas do servidor
        async obterPortas() {
            try {
                const response = await axios.get('http://localhost:4000/portas');
                this.portas = response.data.portas; // Atualiza o array de portas
            } catch (error) {
                console.error('Erro ao obter portas:', error);
            }
        },
        // Função para abrir uma porta
        async abrirPorta(id_porta) {
            try {
                const response = await axios.post('http://localhost:4000/abrir-porta', {
                    id_porta: id_porta
                });

                if (response.data.status === 'sucesso') {
                    alert(` ${id_porta} aberta com sucesso!`);
                } else {
                    alert(`Falha ao abrir a  ${id_porta}.`);
                }
            } catch (error) {
                console.error('Erro ao abrir porta:', error);
            }
        }
    }
});
