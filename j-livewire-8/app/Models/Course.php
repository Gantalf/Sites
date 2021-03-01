<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    //relacion con usuario
    public function user ()
    {
        return $this->belongsTo(User::class);
    }

    //relacion con posts
    public function posts ()
    {
        return $this->hasMany(Post::class);
    }

    //campo virtual
    public function getExcerptAttribute()
    {
        return substr($this->description,0,80) . "..." ;
    }

    //metodo personalizado
    public function similar() 
    {
        return $this->where('category_id', $this->category_id)
        ->where('id', '!=', $this->id)
        ->with('user')
        ->take(2)
        ->get();
    }
}
 