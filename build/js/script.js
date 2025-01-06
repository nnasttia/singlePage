document.getElementById('downloadBtn').addEventListener('click', () => {
    console.log();
    const link = document.createElement('a');
    link.href = 'build/documents/Anastasiia_Khaia_CV.pdf';
    link.download = 'Anastasiia_Khaia_CV.pdf';
    link.click();
});