from django.shortcuts import render
from backend.models import sdb,coursedb,collegedb,tdb
from backend.serializers import sserialiser,collegeserialiser,courseserialiser,tserialiser
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
# Create your views here.
@csrf_exempt
def college(request,id=0):
    if request.method == "GET":
        x=collegedb.objects.all()
        obj = collegeserialiser(x,many=True)
        return JsonResponse(obj.data,safe=False)
    elif request.method == "POST":
        x=JSONParser().parse(request)
        obj = collegeserialiser(data=x)
        if obj.is_valid():
            obj.save()
            return JsonResponse("Data saved successfully...!",safe=False)
        return JsonResponse("invalid data.!",safe=False)
    elif request.method == "PUT":
        x=JSONParser().parse(request)
        y=collegedb.objects.get(c_id=x['c_id'])
        obj = collegeserialiser(y,data=x)
        if obj.is_valid():
            obj.save()
            return JsonResponse("Data Updated..!",safe=False)
        return JsonResponse("Failed to update..!",safe=False)
    elif request.method=="DELETE":
        x=collegedb.objects.get(c_id=id)
        x.delete()
        return JsonResponse("Data Deleted..!", safe=False)

@csrf_exempt
def course(request,id=0):
    if request.method == "GET":
        x=coursedb.objects.all()
        obj = courseserialiser(x,many=True)
        return JsonResponse(obj.data,safe=False)
    elif request.method == "POST":
        x=JSONParser().parse(request)
        obj = courseserialiser(data=x)
        if obj.is_valid():
            obj.save()
            return JsonResponse("Data saved successfully...!",safe=False)
        return JsonResponse("invalid data.!",safe=False)
    elif request.method == "PUT":
        x=JSONParser().parse(request)
        y=coursedb.objects.get(co_id=x['co_id'])
        obj = courseserialiser(y,data=x)
        if obj.is_valid():
            obj.save()
            return JsonResponse("Data Updated..!",safe=False)
        return JsonResponse("Failed to update..!",safe=False)
    elif request.method=="DELETE":
        x=coursedb.objects.get(co_id=id)
        x.delete()
        return JsonResponse("Data Deleted..!", safe=False)

@csrf_exempt
def student(request,id=0):
    if request.method == "GET":
        x=sdb.objects.all()
        obj = sserialiser(x,many=True)
        return JsonResponse(obj.data,safe=False)
    elif request.method == "POST":
        x=JSONParser().parse(request)
        obj = sserialiser(data=x)
        if obj.is_valid():
            obj.save()
            return JsonResponse("Data saved successfully...!",safe=False)
        return JsonResponse("invalid data.!",safe=False)
    elif request.method == "PUT":
        x=JSONParser().parse(request)
        y=sdb.objects.get(s_id=x['s_id'])
        obj = sserialiser(y,data=x)
        if obj.is_valid():
            obj.save()
            return JsonResponse("Data Updated..!",safe=False)
        return JsonResponse("Failed to update..!",safe=False)
    elif request.method=="DELETE":
        x=sdb.objects.get(s_id=id)
        x.delete()
        return JsonResponse("Data Deleted..!", safe=False)

@csrf_exempt
def teacher(request,id=0):
    if request.method == "GET":
        x=tdb.objects.all()
        obj = tserialiser(x,many=True)
        return JsonResponse(obj.data,safe=False)
    elif request.method == "POST":
        x=JSONParser().parse(request)
        obj = tserialiser(data=x)
        if obj.is_valid():
            obj.save()
            return JsonResponse("Data saved successfully...!",safe=False)
        return JsonResponse("invalid data.!",safe=False)
    elif request.method == "PUT":
        x=JSONParser().parse(request)
        y=tdb.objects.get(t_id=x['t_id'])
        obj = tserialiser(y,data=x)
        if obj.is_valid():
            obj.save()
            return JsonResponse("Data Updated..!",safe=False)
        return JsonResponse("Failed to update..!",safe=False)
    elif request.method=="DELETE":
        x=tdb.objects.get(s_id=id)
        x.delete()
        return JsonResponse("Data Deleted..!", safe=False)