from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

class SummarizationModel:
    def __init__(self, model_name="facebook/bart-large-cnn"):
        """
        Initialize the summarization model with the specified pre-trained model.
        :param model_name: HuggingFace model name, default is BART Large CNN.
        """
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

    def summarize(self, text, summary_mode="short", max_length=None):
        """
        Generate a summary for the given text.

        :param text: The input text to summarize.
        :param summary_mode: The type of summary ('short', 'detailed', 'bullet_points').
        :param max_length: Optional, maximum length of the summary.
        :return: The generated summary as a string.
        """
        if summary_mode == "short":
            max_length = max_length or 50
        elif summary_mode == "detailed":
            max_length = max_length or 200
        elif summary_mode == "bullet_points":
            max_length = max_length or 100
        else:
            raise ValueError("Unsupported summary mode. Choose from 'short', 'detailed', or 'bullet_points'.")

        inputs = self.tokenizer.encode(
            text, return_tensors="pt", max_length=1024, truncation=True
        )

        summary_ids = self.model.generate(
            inputs,
            max_length=max_length,
            min_length=25,
            length_penalty=2.0,
            num_beams=4,
            early_stopping=True
        )

        summary = self.tokenizer.decode(summary_ids[0], skip_special_tokens=True)
        
        if summary_mode == "bullet_points":
            return "\n".join([f"- {line.strip()}" for line in summary.split(".") if line.strip()])

        return summary

summarizer_model = SummarizationModel()

if __name__ == "__main__":
    text = (
        "Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals and humans. "
        "Leading AI textbooks define the field as the study of ""intelligent agents"": any system that perceives its environment and takes actions that maximize its chance of achieving its goals."
    )

    print("Short Summary:\n", summarizer.summarize(text, summary_mode="short"))
    print("Detailed Summary:\n", summarizer.summarize(text, summary_mode="detailed"))
    print("Bullet Points Summary:\n", summarizer.summarize(text, summary_mode="bullet_points"))
