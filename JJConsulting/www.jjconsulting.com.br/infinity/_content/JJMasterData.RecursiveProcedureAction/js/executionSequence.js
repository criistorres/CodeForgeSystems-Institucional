function setExecutionSequence(executionSequence){
    const form = getMasterDataForm();

    const existingInput = form.querySelector("input[name='ExecutionSequence']");

    if(executionSequence === -1){
        const obs = document.getElementById("ExecutionSequenceObs");
        if(obs){
            obs.value = "";
        }
    }
    
    if (!existingInput) {
        const hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = "ExecutionSequence";
        hiddenInput.value = executionSequence;

        form.appendChild(hiddenInput);
    } else{
        existingInput.value = executionSequence;
    }
}