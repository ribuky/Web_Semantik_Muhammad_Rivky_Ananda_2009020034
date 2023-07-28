<h2>PRODI</h2>
<?php
$nama = "Ribuky";
$nilai = 90;
echo "Nilai Siswa Yang Bernama" . $nama . "Adalah" . $nilai;
?>

<p>Nilai siswa yang bernama <?php echo $nama ?> adalah <?php echo $nilai ?>, Dan dia mendapatkan Grade Nilai <?php echo grade($nilai); ?></p>

<?php
function grade($nilai)
{
    if ($nilai >= 80) {
        $grade = "A";
    } elseif ($nilai >= 70) {
        $grade = "B";
    } elseif ($nilai >= 60) {
        $grade = "C";
    } elseif ($nilai >= 50) {
        $grade = "D";
    } else {
        $grade = "E";
    }
    return $grade;
}

$laliga = array("Real Madrid","Barcelona", "sevilla","Alt. Madrid");
$jumlah_laliga = count($laliga);
?>
<ul>
    <?php for ($i=0; $i < $jumlah_laliga; $i++) {?>
        <li><?php echo $laliga[$i]; ?></li>
    <?php } ?>
    
</ul>


<?php
$laliga = array("Barcelona" =>"85", "Real Madrid" =>"80", "sevilla" =>"75","Alt. Madrid" =>"73");
?>

<table class="table">
    <thead>
        <tr>
            <th>No</th>
            <th>Nama Team</th>
            <th>Point</th>
        </tr>
    </thead>
    <tbody>
        <?php
            foreach ($laliga as $l =>$l_value) : ?>

            <tr>
                <td></td>
                <td><?php echo $l; ?></td>
                <td><?php echo $l_value; ?></td>
            </tr>

            <?php endforeach; ?>
    </tbody>
</table>
