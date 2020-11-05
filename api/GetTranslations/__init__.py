import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:

    return func.HttpResponse("This HTTP triggered function executed successfully.")