# Generated by Django 3.2.4 on 2021-06-10 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='user_model',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(blank=True, max_length=200, unique=True)),
                ('email', models.CharField(blank=True, max_length=200)),
                ('password', models.CharField(blank=True, max_length=200)),
                ('age', models.CharField(blank=True, max_length=200)),
                ('dob', models.CharField(blank=True, max_length=200)),
                ('phone', models.CharField(blank=True, max_length=200)),
            ],
        ),
    ]
