import React, { FC, useEffect, useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    FlatList,
    Image, SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

const SPACING = 5;
const ITEM_LENGTH = width * 0.8; // Item is a square. Therefore, its height and width are of the same length.
const EMPTY_ITEM_LENGTH = (width - ITEM_LENGTH) / 2;
const BORDER_RADIUS = 20;
const CURRENT_ITEM_TRANSLATE_Y = 48;

interface ImageCarouselProps {
    data: any[];
}

const ImageCarousel: FC<ImageCarouselProps> = ({ data }) => {
    const currentIndex = useRef<number>(0);
    const flatListRef = useRef<FlatList<any>>(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const [dataWithPlaceholders, setDataWithPlaceholders] = useState<any[]>([]);

    useEffect(() => {
        setDataWithPlaceholders([{ id: -1 }, ...data, { id: data.length }]);
    }, [data]);
    const handleOnPrev = () => {
        if (currentIndex.current === 0) {
            handleOnNext()
        }

        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                animated: true,
                index: currentIndex.current - 1,
            });
        }
    }

    const handleOnNext = () => {
        if (currentIndex.current === data.length) {
            handleOnPrev()
            return;
        }

        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                animated: true,
                index: currentIndex.current + 1,
            });
        }
    }
    const getItemLayout = (_data: any, index: number) => ({
        length: ITEM_LENGTH,
        offset: ITEM_LENGTH * (index - 1),
        index,
    })
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={dataWithPlaceholders}
                getItemLayout={getItemLayout}
                renderItem={({ item, index }) => {
                    if (!item.uri || !item.title) {
                        return <View style={{ width: EMPTY_ITEM_LENGTH }} />;
                    }

                    const inputRange = [
                        (index - 2) * ITEM_LENGTH,
                        (index - 1) * ITEM_LENGTH,
                        index * ITEM_LENGTH,
                    ];

                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [
                            CURRENT_ITEM_TRANSLATE_Y * 2,
                            CURRENT_ITEM_TRANSLATE_Y,
                            CURRENT_ITEM_TRANSLATE_Y * 2,
                        ],
                        extrapolate: 'clamp',
                    });
                    return (
                        <View style={{ width: ITEM_LENGTH }}>
                            <View
                                style={styles.itemContent}>
                                <Image source={item.uri} style={{
                                    width: '110%',
                                    height: '75%',
                                    borderRadius: BORDER_RADIUS,
                                    resizeMode: 'contain',
                                    justifyContent: 'center'
                                }} />
                            </View>
                        </View>
                    );
                }}
                horizontal
                keyExtractor={item => item.id}
                renderToHardwareTextureAndroid
                contentContainerStyle={styles.flatListContent}
                ListFooterComponent={(index) => (
                    <View style={{}}>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default ImageCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatListContent: {
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContent: {
        marginHorizontal: SPACING * 4,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: BORDER_RADIUS + SPACING * 2,
    },
    itemImage: {

    },
})