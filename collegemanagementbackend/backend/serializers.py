from rest_framework import serializers
from backend.models import coursedb,collegedb,sdb,tdb

class collegeserialiser(serializers.ModelSerializer):
    class Meta:
        model = collegedb
        fields = (
            'c_id',
            'c_name',
            'Location',
            'Contact_No',
            'email',
        )

class courseserialiser(serializers.ModelSerializer):
    class Meta:
        model = coursedb
        fields = (
            'co_id',
            'CourseName',
            'Duration',
            'Fees',
            'HODname',
            'HOD_mo',
        )
class sserialiser(serializers.ModelSerializer):
    class Meta:
        model = sdb
        fields = (
            's_id',
            'name',
            'age',
            'mobile',
            'email',
            'location',
            'f_name',
            'contactno',
        )

class tserialiser(serializers.ModelSerializer):
    class Meta:
        model = tdb
        fields = (
            't_id',
            'name',
            'mobile',
            'email',
            'location',
        )
