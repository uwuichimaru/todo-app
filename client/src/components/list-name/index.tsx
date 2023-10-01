type Text = {
    image: string | undefined
    text: "My Day" | "Important" | "Planned" | "Assigned to me" |"Tasks"
    classes: string | undefined,
    classa: string | undefined
}
export const ListName: React.FC<Text> = ({ image, text, classes, classa = "" }) => 
{
    return (
        <div className={`text-white text-xl h-[60px] ml-3 flex items-center ${classa}`}>
            <div className="flex gap-2">
                <img src={image} className="w-[25px]" alt="" />
                <div className={classes}>{text}</div>
            </div>
        </div>
    )
}