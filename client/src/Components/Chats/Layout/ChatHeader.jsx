import { useNavigate } from 'react-router-dom';
import { Button } from '@/Components';
import { icons } from '@/Assets/icons';
import { useChatContext, useUserContext } from '@/Context';

export default function ChatHeader() {
    const { selectedChat, setShowSidebar } = useChatContext();
    const navigate = useNavigate();
    const { user } = useUserContext();

    return (
        <div className="bg-[#f6f6f6] h-[60px] border-b-[0.01rem] border-b-[#e6e6e6] flex gap-4 items-center px-4">
            <Button
                className={`sm:hidden bg-[#ffffff] p-2 items-center flex justify-center group rounded-full drop-shadow-md`}
                title="Show Chats"
                onClick={() => setShowSidebar(true)}
                btnText={
                    <div className="size-[18px] fill-[#1a1a1a] group-hover:fill-[#4977ec]">
                        {icons.chevronRight}
                    </div>
                }
            />

            <div className="flex items-center justify-between w-full">
                <div
                    className="flex items-center w-fit cursor-pointer"
                    onClick={() => navigate('details')}
                >
                    {/* Avatar */}
                    {selectedChat?.chat?.isGroupChat ? (
                        <div className="flex items-center -space-x-5">
                            {selectedChat?.chat?.avatar.map((url, i) => (
                                <div
                                    key={i}
                                    className="size-[35px] border border-[#434343] rounded-full overflow-hidden"
                                    style={{
                                        zIndex:
                                            selectedChat?.chat?.avatar.length -
                                            i,
                                    }}
                                >
                                    <img
                                        src={url}
                                        alt="avatar"
                                        className="object-cover size-full rounded-full"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <div className="size-[35px] border border-[#434343] rounded-full overflow-hidden">
                                <img
                                    src={selectedChat?.chat?.avatar}
                                    alt="User Avatar"
                                    className="object-cover size-full rounded-full"
                                />
                            </div>
                        </div>
                    )}

                    <div className="ml-3">
                        <h4 className="text-[15px] line-clamp-1 font-semibold text-gray-800">
                            {selectedChat?.chat?.chat_name}
                        </h4>

                        <div className="text-xs">
                            {selectedChat?.chat?.isGroupChat ? (
                                selectedChat?.membersTyping.filter(
                                    ({ user_id }) => user_id !== user.user_id
                                ).length > 0 ? (
                                    <span className="text-green-500 line-clamp-1">
                                        {selectedChat?.membersTyping
                                            .filter(
                                                ({ user_id }) =>
                                                    user_id !== user.user_id
                                            )
                                            .slice(0, 3)
                                            .map(
                                                ({
                                                    user_firstName,
                                                    user_id,
                                                }) => (
                                                    <span key={user_id}>
                                                        {user_firstName},{' '}
                                                    </span>
                                                )
                                            )}{' '}
                                        {selectedChat?.membersTyping.filter(
                                            ({ user_id }) =>
                                                user_id !== user.user_id
                                        ).length > 1
                                            ? 'are '
                                            : 'is '}
                                        typing
                                    </span>
                                ) : selectedChat?.membersOnline.filter(
                                      ({ user_id }) => user_id !== user.user_id
                                  ).length > 0 ? (
                                    <span className="text-green-500 line-clamp-1">
                                        {selectedChat?.membersOnline
                                            .filter(
                                                ({ user_id }) =>
                                                    user_id !== user.user_id
                                            )
                                            ?.slice(0, 3)
                                            .map(
                                                ({
                                                    user_firstName,
                                                    user_id,
                                                }) => (
                                                    <span key={user_id}>
                                                        {user_firstName},{' '}
                                                    </span>
                                                )
                                            )}
                                        {selectedChat?.membersOnline.filter(
                                            ({ user_id }) =>
                                                user_id !== user.user_id
                                        ).length > 1
                                            ? 'are '
                                            : 'is '}{' '}
                                        online
                                    </span>
                                ) : (
                                    <span className="text-red-400 line-clamp-1">
                                        All are offline
                                    </span>
                                )
                            ) : selectedChat?.membersTyping.filter(
                                  ({ user_id }) => user_id !== user.user_id
                              ).length > 0 ? (
                                <span className="text-green-500">
                                    typing...
                                </span>
                            ) : (
                                <span
                                    className={`${
                                        selectedChat?.membersOnline.filter(
                                            ({ user_id }) =>
                                                user_id !== user.user_id
                                        ).length > 0
                                            ? 'text-green-500'
                                            : 'text-red-400'
                                    }`}
                                >
                                    {selectedChat?.membersOnline.filter(
                                        ({ user_id }) =>
                                            user_id !== user.user_id
                                    ).length > 0
                                        ? 'Online'
                                        : 'Offline'}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-x-3">
                    <Button
                        className="bg-[#ffffff] pt-2 pb-[5px] px-[7px] items-center flex justify-center group rounded-full drop-shadow-md"
                        title="Start Video Call"
                        btnText={
                            <div className="size-[18px] fill-[#1a1a1a] group-hover:fill-[#4977ec]">
                                {icons.video}
                            </div>
                        }
                    />

                    <Button
                        className="bg-[#ffffff] p-[6px] group rounded-full drop-shadow-md w-fit"
                        title="Close Chat"
                        onClick={() => navigate('/chat')}
                        btnText={
                            <div className="size-[19px] stroke-[#434343] group-hover:stroke-red-600">
                                {icons.cross}
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
