import React from 'react'

function PokeFooter() {
    return (
        <div>
            <section class="contact-section bg-black" id="redes">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5">
                        <div class="col-md-4 mb-3 mb-md-0">
                        </div>
                        <div class="col-md-4 mb-3 mb-md-0">
                            <div class="card py-4 h-100">
                                <div class="card-body text-center">
                                    <h4 class="text-uppercase m-0">Iván Velazquez Luna</h4>
                                    <h4 class="text-uppercase m-0">10a IDGS</h4>
                                    <h4 class="text-uppercase m-0">M-180648</h4>
                                    <br />
                                    <i class="fas fa-envelope text-primary mb-2"></i>
                                    <h4 class="text-uppercase m-0">Email</h4>
                                    <hr class="my-4 mx-auto" />
                                    <div class="small text-black-50"><a href="#!">ivan.velazquez@utxicotepec.edu.mx</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="social d-flex justify-content-center">
                        <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                        <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PokeFooter
