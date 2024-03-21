from django.db import models

# Create your models here.
class collegedb(models.Model):
    c_id=models.AutoField(primary_key=True)
    c_name=models.CharField(max_length=100,null=True,blank=True)
    Location=models.CharField(max_length=100,null=True,blank=True)
    Contact_No=models.IntegerField(null=True,blank=True)
    email = models.CharField(max_length=100,null=True,blank=True)

class coursedb(models.Model):
    co_id=models.AutoField(primary_key=True)
    CourseName= models.CharField(max_length=100,null=True,blank=True)
    Duration = models.CharField(max_length=100,null=True,blank=True)
    Fees=models.IntegerField(null=True,blank=True)
    HODname = models.CharField(max_length=100,null=True,blank=True)
    HOD_mo=models.IntegerField(null=True,blank=True)

class sdb(models.Model):
    s_id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=100,null=True,blank=True)
    age =models.IntegerField(null=True,blank=True)
    mobile =models.IntegerField(null=True,blank=True)
    email = models.CharField(max_length=100,null=True,blank=True)
    location= models.CharField(max_length=100,null=True,blank=True)
    f_name = models.CharField(max_length=100,null=True,blank=True)
    contactno =models.IntegerField(null=True,blank=True)

class tdb(models.Model):
    t_id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=100,null=True,blank=True)
    mobile =models.IntegerField(null=True,blank=True)
    email = models.CharField(max_length=100,null=True,blank=True)
    location= models.CharField(max_length=100,null=True,blank=True)