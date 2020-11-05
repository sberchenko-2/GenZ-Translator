import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:

    data = ""
    with open('translations.json', 'r') as f:
        for line in f.readlines():
            data += line

    return func.HttpResponse(data)