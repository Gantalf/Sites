<?php

namespace Tests\Unit\Helpers;

use PHPUnit\Framework\TestCase;
use App\Helpers\Email;
class EmailTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testEmail()
    {   
        $result = Email::validate('i@admin.com');
        $this->assertTrue(true);

        $result = Email::validate('i@@admin.com');
        $this->assertFalse(false);
    }

}
