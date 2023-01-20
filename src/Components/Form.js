import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import "./Form.css";

const schema = yup.object().shape({
  pizza_cesit: yup.string().required("Seçim yapınız."),
  isim_soyisim: yup
    .string()
    .required()
    .min(2, "isim en az 2 karakter olmalıdır"),
  size: yup
    .string()
    .oneOf(["Small", "Medium", "Large"], "Boyutlardan birini seçmelisiniz.")
    .required(),
  adres: yup
    .string()
    .required("Adres alanı girilmelidir.")
    .min(9, "En az 9 karakter girilmelidir."),
  telefon: yup
    .number()
    .typeError("Numara sayı olarak girilmeli.")
    .required("Lütfen telefon numarası girin.")
    .min(10, "Telefon numarası 10 hane olarak girilmelidir."),
  siparisadedi: yup.number().required("Lütfen sipariş adedini girin!"),

  salami: yup.boolean().oneOf([true, false], ""),
  sausage: yup.boolean().oneOf([true, false], ""),
  bacon: yup.boolean().oneOf([true, false], ""),
  tomatoes: yup.boolean().oneOf([true, false], ""),
  mushrooms: yup.boolean().oneOf([true, false], ""),
  pepper: yup.boolean().oneOf([true, false], ""),
  mint: yup.boolean().oneOf([true, false], ""),
  not: yup.string(),
});

export default function Form() {
  const [form, setForm] = useState({
    pizza_cesit: "",
    size: "none",
    salami: false,
    sausage: false,
    tomatoes: false,
    mushrooms: false,
    pepper: false,
    mint: false,
    isim_soyisim: "",
    adres: "",
    telefon: "",
    not: "",
    siparisadedi: "",
  });

  const [errors, setErrors] = useState({
    pizza_cesit: "",
    size: "",
    salami: "",
    sausage: "",
    tomatoes: "",
    mushrooms: "",
    pepper: "",
    mint: "",
    isim_soyisim: "",
    adres: "",
    telefon: "",
    not: "",
    siparisadedi: "",
  });

  const [buttonDisabledMı, setbuttonDisabledMı] = useState(true);
  const [newSiparis, setNewSiparis] = useState(null);

  useEffect(() => {
    schema.isValid(form).then((valid) => setbuttonDisabledMı(!valid));
  }, [form]);

  function handleChange(event) {
    const { name, value } = event.target;
    formAlanınıKontrolEt(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  }

  function formAlanınıKontrolEt(name, value) {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", form)
      .then((response) => {
        console.log(response.data);
        setNewSiparis(response.data);
        setForm({
          pizza_cesit: "",
          size: "none",
          salami: false,
          sausage: false,
          tomatoes: false,
          mushrooms: false,
          pepper: false,
          mint: false,
          isim_soyisim: "",
          adres: "",
          telefon: "",
          not: "",
          siparisadedi: "",
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="pizza_siparis">
      <form onSubmit={handleSubmit}>
        <div className="pizza_cesit">
          <h3>Pizza türünü seçin</h3>
          <select
            name="pizza_cesit"
            value={form.pizza_cesit}
            onChange={handleChange}
          >
            <option value="">Pizza türünü seçin</option>
            <option value="supreme">Supreme</option>
            <option value="marinara">Marinara</option>
            <option value="hawaii">Hawaii</option>
            <option value="margarita">Margarita</option>
          </select>
          {errors.pizza_cesit && <p>{errors.pizza_cesit}</p>}
        </div>
        <div className="pizza_size">
          <h3>Pizza boyutunu seçin</h3>
          <input
            type="radio"
            value="Small"
            name="size"
            checked={form.size === "Small"}
            onChange={handleChange}
          />{" "}
          Small
          <input
            type="radio"
            value="Medium"
            name="size"
            checked={form.size === "Medium"}
            onChange={handleChange}
          />{" "}
          Medium
          <input
            type="radio"
            value="Large"
            name="size"
            checked={form.size === "Large"}
            onChange={handleChange}
          />{" "}
          Large
          {errors.pizza_size && <p>{errors.pizza_size}</p>}
        </div>
        <div className="pizza_ingredient">
          <h3>Ekstra malzeme seçin</h3>
          <label>
            <input
              type="checkbox"
              name="salami"
              id="salami"
              value={form.salami}
              onChange={handleChange}
            />
            Salami
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="sausage"
              id="sausage"
              value={form.sausage}
              onChange={handleChange}
            />
            Sausage
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="tomatoes"
              id="tomatoes"
              value={form.tomatoes}
              onChange={handleChange}
            />
            Tomatoes
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="mushrooms"
              id="mushrooms"
              value={form.mushrooms}
              onChange={handleChange}
            />
            Mushrooms
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="pepper"
              id="pepper"
              value={form.pepper}
              onChange={handleChange}
            />
            Pepper
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="mint"
              id="mint"
              value={form.mint}
              onChange={handleChange}
            />
            Mint
            <label>
              <br />
            </label>
          </label>
        </div>
        <div className="isim_soyisim">
          <h3>İletişim Bilgileri</h3>

          <label>
            İsim Soyisim:
            <input
              type="text"
              name="isim_soyisim"
              value={form.isim_soyisim}
              onChange={handleChange}
            />
          </label>
          {errors.isim_soyisim && <p>{errors.isim_soyisim}</p>}
        </div>
        <div className="adres">
          <label>
            Adres:
            <input
              type="text"
              name="adres"
              value={form.adres}
              onChange={handleChange}
            />
          </label>
          {errors.adres && <p>{errors.adres}</p>}
        </div>
        <div className="telefon">
          <label>
            Telefon:
            <input
              type="text"
              name="telefon"
              value={form.telefon}
              onChange={handleChange}
            />
          </label>
          {errors.telefon && <p>{errors.telefon}</p>}
        </div>

        <div className="siparis_notu">
          <h3>Sipariş Notu</h3>
          <br />
          <label>
            <input
              type="text"
              name="not"
              value={form.not}
              onChange={handleChange}
            />
          </label>
          {errors.not && <p>{errors.not}</p>}
        </div>
        <div className="siparisadedi">
          <h3>Sipariş Adedi</h3>
          <label>
            <input
              type="number"
              name="siparisadedi"
              value={form.siparisadedi}
              min="1"
              onChange={handleChange}
            />
          </label>
          {errors.siparisadedi && <p>{errors.siparisadedi}</p>}
        </div>
        <input
          type="submit"
          name="button"
          disabled={buttonDisabledMı}
          value="siparişi gönder"
        />
        {newSiparis && (
          <p className="onay">
            {newSiparis.isim_soyisim} adlı kullanıcının {newSiparis.id} no lu
            siparişi oluşturuldu.
          </p>
        )}
      </form>
    </div>
  );
}
