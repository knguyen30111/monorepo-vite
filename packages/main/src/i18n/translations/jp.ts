import dedent from 'dedent';

const jp = {
  common: {
    alert: {
      failed: '保存できませんでした',
      success: '変更を保存しました',
    },
    buttons: {
      back: '戻る',
      cancel: 'キャンセル',
      close: '閉じる',
      confirm: '確認する',
      contactStore: '店舗一覧はこちら',
      leavePage: 'このページを離れる',
      next: '次へ',
      notSpecificed: '指定無し',
      reload: 'もう一度試す',
      resetData: 'リセットして戻る',
      save: '保存する',
    },
    errors: {
      unknown: {
        title: '予期せぬエラーが発生しました。',
      },
    },
    form: {
      alert: {
        failed: '保存できませんでした',
        success: '変更を保存しました',
      },
      errors: {
        email: {
          length: '正しいメールアドレスの形式で入力してください。',
          validation: '正しいメールアドレスの形式で入力してください。',
        },
        phone: {
          length: '電話番号が正しくありません。',
          validation: 'ハイフンなしで半角数字のみで入力してください。',
        },
        licensePlate: {
          validation: 'ハイフンやシンボルなしで半角数字のみで入力してください',
        },
        licensePlate4Digits: {
          length: 'ナンバープレートの下4桁を半角数字でご入力ください。',
          validation: 'ハイフンやシンボルなしで半角数字のみで入力してください',
        },
      },
      labels: {
        email: 'メールアドレス',
        friendChatURL: '有人チャットURL',
        licensePlate: 'ナンバープレート',
        licensePlate4Digits: 'ナンバープレートの下4桁',
        name: '名前',
        otherRequests: 'その他ご要望',
        phone: '電話番号（ハイフンなし）',
        reservationDate1st: '第1候補日',
        reservationDate2nd: '第2候補日',
        reservationDate3rd: '第3候補日',
        service: 'サービス',
        store: '店舗',
        substituteVehicle: '代車希望',
        vehicleType: '車種',
      },
      modal: {
        confirmButton: '決定',
        pickDay: 'ご希望の日程をお選びください',
        noTime:
          '選択日は、休業日もしくはすでに予約満了となっております。カレンダーより別の日程をお選びください。',
      },
      options: {
        substituteVehicle: {
          default: '選択してください。',
          doNotRequest: '希望しない',
          request: '希望する',
        },
      },
      placeholders: {
        email: '例：okayama.taro@gmail.com',
        licensePlate: '例：品川300や7777',
        licensePlate4Digits: '例：7777',
        name: '例：山田太郎',
        otherRequests:
          '自由にコメントを入力してください。（例：バッテリー交換）',
        phone: '例：09012345678',
        reservationDate1st: '例：2021/01/19 10:00',
        reservationDate2nd: '例：2021/01/19 10:00',
        reservationDate3rd: '例：2021/01/19 10:00',
        substituteVehicle: '選択してください。',
        vehicleType: '例：プリウス',
      },
      termsAndConditions:
        '<0>利用規約</0>と<1>プライバシーポリシー</1>に同意する',
      termsAndConditionsAdditionalInfo:
        'このサービスは、株式会社Zealsのサービスを利用しています',
    },
    labels: {
      otherRequestsContact: `その他ご用命は、直接店舗までご連絡ください。`,
    },
    modal: {
      messages: {
        backConfirmation: {
          message: 'このサイトを離れてもよろしいですか？',
          title: '行った変更が保存されない可能性があります。',
        },
        dataRetrieval: {
          message: 'しばらく時間をおいてから再度お試しください。',
          title: 'データの取得に失敗しました。',
        },
        resetData: {
          message:
            '変更をリセットしてマイカー情報ページに戻ってもよろしいですか？',
        },
      },
    },
    pageTitles: {
      reservationForm: '予約情報を入力してください。',
      reservationSummary: '予約情報をご確認ください。',
      services: 'ご希望のサービスを教えていただけますか？',
      stores: '店舗をお選びください。',
    },
    pdf: {
      title: 'スケール',
    },
    required: '必須',
    router: {
      notFound: 'このページは存在しません。',
    },
    summary: {
      buttons: {
        edit: '編集する',
        inforEdit: 'マイカー情報を編集する',
        send: '送信する',
      },
      labels: {
        substituteVehicle: '代車をご希望されますか？',
        inforTitle: 'マイカー情報',
      },
    },
    thanks: {
      informationSent: '予約情報を送信しました',
      message: dedent`予約状況を確認し担当スタッフより
      LINEにてご案内します。
      
      このページを閉じてください。`,
    },
  },
  profile: {
    buttons: {
      reservation: '入庫予約する',
      updateInfo: 'マイカー情報を編集する',
    },
  },
  router: {
    noPage: '申し訳有りませんが、お探しのページは存在しません。',
  },
};

export default jp;
