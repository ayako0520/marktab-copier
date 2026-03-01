document.getElementById('copyBtn').addEventListener('click', async () => {
  const button = document.getElementById('copyBtn');
  const resultDiv = document.getElementById('result');
  
  try {
    // 現在のアクティブタブを取得
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // Markdown形式で整形
    const markdownLink = `[${tab.title}](${tab.url})`;
    
    // クリップボードにコピー
    await navigator.clipboard.writeText(markdownLink);
    
    // 成功メッセージを表示
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('copied');
    
    // 2秒後に元に戻す
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('copied');
    }, 2000);
    
  } catch (error) {
    resultDiv.textContent = 'Error: ' + error.message;
    resultDiv.style.color = '#ff6b6b';
  }
});

document.getElementById('copyAllBtn').addEventListener('click', async () => {
  const button = document.getElementById('copyAllBtn');
  const resultDiv = document.getElementById('result');
  
  try {
    // 現在のウィンドウの全タブを取得
    const tabs = await chrome.tabs.query({ currentWindow: true });
    
    // 全タブをMarkdown形式で整形
    const markdownLinks = tabs.map(tab => `[${tab.title}](${tab.url})`).join('\n');
    
    // クリップボードにコピー
    await navigator.clipboard.writeText(markdownLinks);
    
    // 成功メッセージを表示
    const originalText = button.textContent;
    button.textContent = `Copied ${tabs.length} tabs!`;
    button.classList.add('copied');
    
    // 2秒後に元に戻す
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('copied');
    }, 2000);
    
  } catch (error) {
    resultDiv.textContent = 'Error: ' + error.message;
    resultDiv.style.color = '#ff6b6b';
  }
});
