document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate-button');
    const resetButton = document.getElementById('reset-button');

    calculateButton.addEventListener('click', calculateBMI);
    resetButton.addEventListener('click', resetInputs);

    function calculateBMI() {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // Ubah tinggi ke meter
        const bmi = weight / (height * height); // Rumus BMI
        const bmiValueElement = document.querySelector('.container-result h1');
        const bmiCategoryElement = document.querySelector('.container-result h4');
        const additionalTextElement = document.getElementById('additional-text');

        bmiValueElement.textContent = bmi.toFixed(2); // Menampilkan BMI dengan 2 desimal
        displayDiseaseDescription(bmi);

        if (bmi < 18.5) {
            bmiCategoryElement.textContent = 'Anda memiliki Berat Badan Kurang';
            additionalTextElement.textContent = 'Anda memerlukan asupan makanan yang lebih untuk mencapai berat badan yang sehat.';
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiCategoryElement.textContent = 'Berat Badan Anda Ideal';
            additionalTextElement.textContent = 'Pertahankan pola makan yang seimbang dan tetap aktif untuk menjaga kesehatan Anda.';
        } else if (bmi >= 25 && bmi < 30) {
            bmiCategoryElement.textContent = 'Anda memiliki Berat Badan Berlebih';
            additionalTextElement.textContent = 'Perubahan gaya hidup yang sehat, termasuk diet seimbang dan olahraga rutin, dapat membantu menurunkan berat badan.';
        } else {
            bmiCategoryElement.textContent = 'Anda memiliki Obesitas';
            additionalTextElement.textContent = 'Konsultasikan dengan dokter atau ahli gizi untuk rencana penurunan berat badan yang aman dan efektif.';
        }
    }

    function displayDiseaseDescription(bmi) {
        const diseaseDescriptionElement = document.getElementById('disease-description-text');
        let diseaseList = '';
    
        if (bmi >= 0 && bmi < 16) {
            diseaseList = '<span style="font-size: 1.2em;">BMI Anda rendah, yang dapat meningkatkan risiko berbagai penyakit, termasuk:</span><ul><li>Penyakit jantung</li><li>Stroke</li><li>Diabetes tipe 2</li><li>Hipertensi</li></ul>';
        } else if (bmi >= 16 && bmi < 17) {
            diseaseList = '<span style="font-size: 1.2em;">BMI Anda rendah, yang dapat meningkatkan risiko, termasuk:</span><ul><li>Penyakit jantung</li><li>Diabetes tipe 2</li><li>Gangguan muskuloskeletal</li></ul>';
        } else if (bmi >= 17 && bmi < 18.5) {
            diseaseList = '<span style="font-size: 1.2em;">BMI Anda rendah, yang dapat meningkatkan risiko, termasuk:</span><ul><li>Diabetes tipe 2</li><li>Tekanan darah tinggi</li><li>Kolesterol tinggi</li></ul>';
        } else if (bmi >= 18.5 && bmi < 25) {
            diseaseList = '<span style="font-size: 1.2em;">BMI Anda ideal, yang dapat membantu mengurangi risiko, termasuk:</span><ul><li>Penyakit jantung</li><li>Stroke</li><li>Diabetes</li><li>Beberapa jenis kanker</li></ul>';
        } else if (bmi >= 25 && bmi < 30) {
            diseaseList = '<span style="font-size: 1.2em;">BMI Anda berlebih, yang dapat meningkatkan risiko, termasuk:</span><ul><li>Penyakit jantung</li><li>Diabetes tipe 2</li><li>Tekanan darah tinggi</li><li>Penyakit hati</li></ul>';
        } else if (bmi >= 30 && bmi < 35) {
            diseaseList = '<span style="font-size: 1.2em;">Anda memiliki obesitas, yang dapat meningkatkan risiko, termasuk:</span><ul><li>Penyakit kardiovaskular</li><li>Diabetes</li><li>Sleep apnea</li><li>Beberapa jenis kanker</li></ul>';
        } else if (bmi >= 35 && bmi < 40) {
            diseaseList = '<span style="font-size: 1.2em;">Anda memiliki obesitas tingkat II, yang dapat meningkatkan risiko, termasuk:</span><ul><li>Penyakit kardiovaskular</li><li>Diabetes</li><li>Stroke</li><li>Beberapa jenis kanker</li></ul>';
        } else {
            diseaseList = '<span style="font-size: 1.2em;">Anda memiliki obesitas tingkat III (obesitas morbidity), yang dapat meningkatkan risiko penyakit serius dan mempersulit penanganan masalah kesehatan lainnya.</span>';
        }   
        
        diseaseDescriptionElement.innerHTML = diseaseList;
    }
    

    function resetInputs() {
        document.getElementById('weight').value = '';
        document.getElementById('height').value = '';
        document.getElementById('age').value = '';
        document.getElementById('sex-man').checked = false;
        document.getElementById('sex-woman').checked = false;
        document.querySelector('.container-result h1').textContent = '0';
        document.querySelector('.container-result h4').textContent = '-';
        document.getElementById('additional-text').textContent = '';
        document.getElementById('disease-description-text').textContent = '';
    }
});
