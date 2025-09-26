<script lang="ts">
  
</script>

<div class="cardContainer">
  <div class="loading-skeleton image">
  </div>
  <div class="content">
    <div class="loading-skeleton lineHeight lineOne">
      lorem ipsum dolor sit amet
    </div>
    <div class="loading-skeleton lineHeight lineTwo">
    </div>
    <footer class="footer">
      <div class="loading-skeleton circle">
      </div>
      <div class="loading-skeleton lineHeight lineFour">
      </div>
    </footer>
  </div>
</div>

<style scoped>
.cardContainer {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.image {
  height: 104px;
  width: 152px;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
}

.lineHeight {
  flex-basis: 25%;
}

.lineOne {
  width: auto;
}

.lineTwo {
  width: 48px;
}

.lineFour {
  flex-basis: 75%;
}

.footer {
  display: flex;
  flex-direction: row;
  width: 120px;
  gap: 0.5rem;
  margin-block-start: auto;
}

.circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
</style>