function divisbleByOneThroughTwenty () {
	for (var i = 20; i <= Number.MAX_VALUE; i += 20) {
		if (i % 20 == 0) {
			if (i % 19 == 0) {
				if (i % 18 == 0) {
					if (i % 17 == 0) {
						if (i % 16 == 0) {
							if (i % 15 == 0) {
								if (i % 14 == 0) {
									if (i % 13 == 0) {
										if (i % 12 == 0) {
											if (i % 11 == 0) {
												return i;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}