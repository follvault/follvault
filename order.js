

document.addEventListener('DOMContentLoaded', () => {
    const pricePerUnit = 1.00;
    const upiId = '8143664704@fam'; 
    const payeeName = 'FollVault';  
const payFirstBtn = document.getElementById('payFirstBtn');
    const qtyInput = document.getElementById('order-quantity');
    const feedback = document.getElementById('payment-feedback');

    if (!payFirstBtn || !qtyInput || !feedback) {
        console.error("Payment script error: Make sure your HTML has elements with these IDs: 'payFirstBtn', 'order-quantity', and 'payment-feedback'");
        return;
    }
    payFirstBtn.addEventListener('click', () => {
        feedback.textContent = '';
        const qty = parseInt(qtyInput.value, 10);

    
        if (!qty || qty < 5 || qty > 50) {
            alert('Please enter a quantity between 5 and 50.');
            qtyInput.focus(); 
            return; 
        }

    
        const amount = (qty * pricePerUnit).toFixed(2); 
        const transactionNote = `FollVault Order - Qty ${qty}`;

        
        const params = new URLSearchParams();
        params.set('pa', upiId);
        params.set('pn', payeeName);
        params.set('am', amount);
        params.set('tn', transactionNote);
        params.set('cu', 'INR');
        const upiUri = `upi://pay?${params.toString()}`;

        
        const confirmMsg = `You are about to pay ₹${amount} to ${payeeName}.

Proceed to your UPI app?`;
        if (!confirm(confirmMsg)) {
            return; 
        }

        
        payFirstBtn.disabled = true;
        payFirstBtn.textContent = 'Opening UPI App...';

    
        window.location.href = upiUri;
        
        feedback.textContent = 'If the app does not open, please ensure you are on a mobile device.';

    
        setTimeout(() => {
            payFirstBtn.disabled = false;
            payFirstBtn.textContent = 'Pay First';
        }, 3000);
    });
});
