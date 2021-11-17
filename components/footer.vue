<template>
    <footer>
        <img src="/newsletter/title.png" class="newsletter-title" />
        <form
            class="form"
            method="POST"
            :action="signupAction"
            target="_blank"
            novalidate
        >
            <input
                name="EMAIL"
                type="text"
                class="input"
                placeholder="Email Adresse"
            />
            <button type="submit" class="button">Anmelden</button>
        </form>
        <hr />
        <RichText :content="address" className="footer-address" />
        <ul>
            <li v-for="slice in slices" :key="">
                <nuxt-link :to="slice.href" v-if="slice.type === 'menu_entry'">
                    {{ linkName(slice) }}
                </nuxt-link>
                <a :href="slice.href" class="icon" target="_blank" v-else>
                    <i :class="classNames(slice.icon)"></i>
                </a>
            </li>
        </ul>
    </footer>
</template>

<script>
import components from '@/components';
import linkResolver from '@/util/linkResolver';

export default {
    name: 'Footer',
    components,

    computed: {
        slices() {
            return this.$store.getters.footer.data.body.map(slice => ({
                ...slice.primary,
                type: slice.slice_type,
                href:
                    slice.slice_type === 'menu_entry'
                        ? linkResolver(slice.primary.page)
                        : slice.primary.link.url
            }));
        },
        address() {
            return this.$store.getters.footer.data.adresse;
        },
        signupAction() {
            return 'https://flugwerk.us18.list-manage.com/subscribe/post?u=f509a06c4f035daa85627f028&amp;id=1a4837c332';
        }
    },

    methods: {
        linkName(slice) {
            return slice.name.length > 0
                ? slice.name[0].text
                : this.$store.getters.page(slice.page.uid).title[0].text;
        },
        classNames(icon) {
            return {
                facebook: ['fab', 'fa-facebook-f'],
                instagram: ['fab', 'fa-instagram']
            }[icon.toLowerCase()];
        }
    }
};
</script>

<style lang="scss">
.footer-address p {
    text-align: center;
}
</style>

<style lang="scss" scoped>
@import '@/style/_imports';

.form {
    text-align: center;
}

.newsletter-title {
    display: block;
    width: 100vw;
    margin-bottom: -3vw;
}

.input {
    font-family: 'Courier New';
    width: 300px;
    font-size: 20px;
    line-height: 20px;
    padding: 4px 8px;
    background-color: $yellow;
    border: none;
    outline: none;

    &::placeholder {
        font-style: italic;
        color: $blue;
    }
}

.button {
    border: 1px solid $blue;
    cursor: pointer;
    border: none;
    color: transparent;
    background-color: $yellow;
    background-image: url(/newsletter/button.png);
    background-size: contain;
    width: 100px;
    height: 30px;
    transform: translateY(-2px);
    overflow: hidden;
}

footer {
    margin-top: 50px;
    background-color: $black;
    color: $yellow;
    padding: 20px 20px 50px 20px;
    overflow: hidden;
}

hr {
    margin-top: 80px;
    border: none;
}

ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

li {
    display: block;
    margin-right: 20px;
}

a {
    color: $yellow;
    &:hover {
        font-weight: bold;
    }

    &.icon {
        height: 20px;
        display: block;
        padding: 4px;
        margin: -4px;
        border-radius: 4px;

        &:hover {
            color: black;
            background-color: $yellow;
        }
    }
}
</style>
