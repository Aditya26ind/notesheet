# Generated by Django 3.2.4 on 2021-06-18 07:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0002_auto_20210615_1620'),
    ]

    operations = [
        migrations.CreateModel(
            name='notes_by_user',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='notes_user',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=200, unique=True)),
            ],
        ),
        migrations.DeleteModel(
            name='notes_model',
        ),
        migrations.AddField(
            model_name='notes_by_user',
            name='username',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='notes.notes_user'),
        ),
    ]
